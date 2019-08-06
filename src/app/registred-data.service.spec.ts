import { TestBed } from '@angular/core/testing';

import { RegistredDataService } from './registred-data.service';

describe('RegistredDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegistredDataService = TestBed.get(RegistredDataService);
    expect(service).toBeTruthy();
  });
});
