const substring1 = 'AB';
const substring2 = 'CD';

function minLength(s: string) {
  //start a infinite loop
  for (let i = 1; i > 0; i++) {
    if (!s.includes(substring1) && !s.includes(substring2)) return s.length;

    if (s.includes(substring1)) s = s.replace(substring1, '');

    if (s.includes(substring2)) s = s.replace(substring2, '');
  }
}

console.log(minLength('FCABD'));
