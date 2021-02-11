const calculate = (calcText: string, calcDisplay: string, calcSign: string): string => {
  let calcVal: string;

  if(Number(calcText) < 0 && calcSign == '-') {
    calcVal = eval(Number(calcDisplay) + '+' + Math.abs(Number(calcText)));
  } else {
    calcVal = eval(Number(calcDisplay) + '' + calcSign + '' + Number(calcText));
  }

  calcVal = isFinite(Number(calcVal)) ? calcVal : '0';

  return calcVal;
}

export default calculate;