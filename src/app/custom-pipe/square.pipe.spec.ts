import { SquarePipe } from './square.pipe';
import { TestBed} from '@angular/core/testing';


describe('SquarePipe', () => {
  let pipe: SquarePipe;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ SquarePipe ]
    })
  });

  beforeEach(()=>{    
    pipe = new SquarePipe();
  })

  it("should return number with it's square",function(){

   expect(pipe.transform(5)).toEqual(25)

  })

  it("should return Not a Number with non number values",function(){

    expect(pipe.transform("mona")).toEqual("Not a number")
  })
  
});
