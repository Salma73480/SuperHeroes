  
import { TestBed } from '@angular/core/testing';

import { VillanossService } from './villano.service';

describe('VillanossService', () => {
  let service: VillanossService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VillanossService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});