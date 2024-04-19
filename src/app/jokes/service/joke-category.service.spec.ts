import { TestBed } from '@angular/core/testing';

import { JokeCategoryService } from './joke-category.service';

describe('JokeCategoryService', () => {
  let service: JokeCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JokeCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
