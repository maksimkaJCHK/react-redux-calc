const calculate = (calcText, calcDisplay, calcSign) => {
  let calcVal;

  if (calcText < 0 && calcSign == '-') {
    calcVal = eval(Number(calcDisplay) + '+' + Math.abs(Number(calcText)));
  } else {
    calcVal = eval(Number(calcDisplay) + '' + calcSign + '' + Number(calcText));
  }

  calcVal = isFinite(calcVal) ? calcVal : '0';

  return calcVal;
}

export default calculate;