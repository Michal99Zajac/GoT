export function calcAlive(born: string, died: string): string {
  if (born === '' && died === '') {
    return 'Unknown';
  } else if (born === '') {
    return 'No';
  } else if (died === '') {
    return 'Yes';
  } else {
    const age = +died.split(' ').filter(val => /\d/.test(val))[0] - +born.split(' ').filter(val => /\d/.test(val))[0];

    return `No, died at ${isNaN(age) ? 'Unknown' : age} years old`;
  }
}
