/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ElectronAdapterService } from './electron-adapter.service';

describe('Service: ElectronAdapter', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ElectronAdapterService]
    });
  });

  it('should ...', inject([ElectronAdapterService], (service: ElectronAdapterService) => {
    expect(service).toBeTruthy();
  }));
});
