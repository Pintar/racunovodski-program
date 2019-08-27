import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { RequestService } from './request.service';

describe('RequestService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => TestBed.configureTestingModule({
    providers: [RequestService],
    imports: [HttpClientTestingModule]
  }));

  beforeEach(() => {
    httpTestingController = TestBed.get(HttpTestingController);
    httpClient = TestBed.get(HttpClient);
    httpTestingController.verify();
  });

  it('should be created', () => {
    const service: RequestService = TestBed.get(RequestService);
    expect(service).toBeTruthy();
  });
});
