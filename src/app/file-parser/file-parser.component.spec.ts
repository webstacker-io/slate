/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FileParserComponent } from './file-parser.component';

describe('FileParserComponent', () => {
  let component: FileParserComponent;
  let fixture: ComponentFixture<FileParserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileParserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileParserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
