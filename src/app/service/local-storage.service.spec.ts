import { TestBed } from '@angular/core/testing';
import { LocalStorageService } from './local-storage.service';
import { LocalStorageKeys } from './types';

describe('LocalStorageService', () => {
  let service: LocalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('test Local Storage setLocalStorageItem', async () => {
    const mockId: LocalStorageKeys = LocalStorageKeys.category;
    const mockJson = { data: 'category' };
    service.setLocalstorageItem(mockId, mockJson);
    expect(service.getLocalStorageItem<any>(mockId)).toEqual(mockJson);
  });
});
