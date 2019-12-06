import { TestBed } from '@angular/core/testing';

import { TemplatemasterdataService } from './templatemasterdata.service';

describe('TemplatemasterdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TemplatemasterdataService = TestBed.get(TemplatemasterdataService);
    expect(service).toBeTruthy();
  });
});
