function showMyName(name: string): void  {
  console.log(name)
}

showMyName('John')

function square(a: number): number {
  return a * a
}

const squa: number = square(10)

function sum(title: string, ...numbers: number[]): string  {
  return title + ' = ' + numbers.reduce((sum, num) => sum + num, 0)
}

const suma: string = sum('Numbers', 1, 6, 10)

const executeFunc = (func: (title: string, age: number, hobbies: string[]) => boolean)  => {
  const title: string  = 'Lorem Ipsum'
  const age: number = 24;
  const hobbies: string[] = ['Sport', 'Movies']; 
  func(title, age, hobbies)
}
//@ts-ignore
executeFunc((title, age, hobbies) => { return true })