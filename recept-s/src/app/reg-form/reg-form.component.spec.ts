import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PublicRoutingModule } from 'src/app/public/public-routing.module';
import { RegFormComponent } from './reg-form.component';

describe('RegFormComponent', () => {
  let component: RegFormComponent;
  let fixture: ComponentFixture<RegFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegFormComponent ],
      imports: [
        // Import our Routes for this module
        PublicRoutingModule,
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

