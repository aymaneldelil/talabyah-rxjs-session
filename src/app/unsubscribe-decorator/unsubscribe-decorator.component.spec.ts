import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnsubscribeDecoratorComponent } from './unsubscribe-decorator.component';

describe('UnsubscribeDecoratorComponent', () => {
  let component: UnsubscribeDecoratorComponent;
  let fixture: ComponentFixture<UnsubscribeDecoratorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnsubscribeDecoratorComponent]
    });
    fixture = TestBed.createComponent(UnsubscribeDecoratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
