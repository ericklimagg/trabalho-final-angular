import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { HomeComponent } from './home.component';

// 'describe' define uma suíte de testes para o HomeComponent
describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  // 'beforeEach' é executado antes de cada teste
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [HttpClientTestingModule] // Módulo de teste para HTTP
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // 'it' define um caso de teste específico
  it('should create', () => {
    // 'expect' verifica se uma condição é verdadeira
    expect(component).toBeTruthy();
  });
});