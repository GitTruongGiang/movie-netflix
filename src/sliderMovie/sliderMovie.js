const silderMovie = (e, time, amount, start) => {
  let eAmt = amount / 100;
  let curtime = 0;
  let scrollycounter = 0;
  const y = window.scrollY;
  while (curtime <= time) {
    window.setTimeout(SHS_B, curtime, e, scrollycounter, eAmt, start, y);
    curtime += time / 100;
    scrollycounter++;
  }
  window.scrollTo(1, y);
};

const SHS_B = (e, sc, eAmt, start, y) => {
  e.scrollLeft = eAmt * sc + start;
};

export default silderMovie;
