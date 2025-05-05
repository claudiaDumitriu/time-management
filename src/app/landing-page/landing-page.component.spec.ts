import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { LandingPageComponent } from './landing-page.component';
import { Router } from '@angular/router';

describe('LandingPageComponent', () => {
  let component: LandingPageComponent;
  let fixture: ComponentFixture<LandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
  it('should display the header logo', () => {
    const logo = fixture.nativeElement.querySelector('.header-logo img');
    expect(logo).toBeTruthy();
  });
  it('should display the main title', () => {
    const title = fixture.nativeElement.querySelector('.header-title');
    expect(title.textContent).toBe('Pomodoro Time Management');
  });
  it('should display the subtitle', () => {
    const subtitle = fixture.nativeElement.querySelector('.header-subtitle');
    expect(subtitle.textContent.trim()).toBe(
      'Get a clear overview of your achievements in one place'
    );
  });
  it('should call loginPage() when LOG IN button is clicked', () => {
    spyOn(component, 'loginPage');
    const loginButton = fixture.nativeElement.querySelector('.btn-login');
    loginButton.click();
    expect(component.loginPage).toHaveBeenCalled();
  });
  it('should call registerPage() when SIGN UP button is clicked', () => {
    spyOn(component, 'registerPage');
    const signupButton = fixture.nativeElement.querySelector('.btn-signup');
    signupButton.click();
    expect(component.registerPage).toHaveBeenCalled();
  });

  it('should navigate to /login', inject([Router], (router: Router) => {
    const navigateSpy = spyOn(router, 'navigate');
    component.loginPage();
    expect(navigateSpy).toHaveBeenCalledWith(['/login']);
  }));

  it('should navigate to /register', inject([Router], (router: Router) => {
    const navigateSpy = spyOn(router, 'navigate');
    component.registerPage();
    expect(navigateSpy).toHaveBeenCalledWith(['/register']);
  }));
});
