import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionReseauComponent } from './section-reseau.component';

describe('SectionReseauComponent', () => {
  let component: SectionReseauComponent;
  let fixture: ComponentFixture<SectionReseauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionReseauComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionReseauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
