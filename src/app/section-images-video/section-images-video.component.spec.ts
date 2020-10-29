import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionImagesVideoComponent } from './section-images-video.component';

describe('SectionImagesVideoComponent', () => {
  let component: SectionImagesVideoComponent;
  let fixture: ComponentFixture<SectionImagesVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionImagesVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionImagesVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
