import { ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

export function testIdSelector(testId: string): string {
  return `[data-testid="${testId}"]`;
}

export function queryByCss<T>(
  fixture: ComponentFixture<T>,
  selector: string
): DebugElement {
  // The return type of DebugElement#query() is declared as DebugElement,
  // but the actual return type is DebugElement | null.
  // See https://github.com/angular/angular/issues/22449.
  const debugElement = fixture.debugElement.query(By.css(selector));
  // Fail on null so the return type is always DebugElement.
  if (!debugElement) {
    throw new Error(`queryByCss: Element with ${selector} not found`);
  }
  return debugElement;
}

export function getByText<T>(
  fixture: ComponentFixture<T>,
  tagName: string,
  text: string
) {
  const debugElement = fixture.debugElement.query(
    (debugEl) =>
      debugEl.nativeElement.textContent === text && debugEl.name === tagName
  );

  if (!debugElement) {
    throw new Error(`queryByCss: Element with text: ${text} not found`);
  }

  return debugElement;
}

export function findElementByTestId<T>(
  fixture: ComponentFixture<T>,
  testId: string
): DebugElement {
  return queryByCss<T>(fixture, testIdSelector(testId));
}
