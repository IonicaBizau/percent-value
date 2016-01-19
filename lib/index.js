function percentValue(input) {
    input = parseFloat(input);
    return {
        of: total => {
            // input ..... total
            // ?     ..... 100
            total = parseFloat(total);
            return input *  100 / total;
        }
      , get: percent => {
            // ?       ..... input
            // percent ..... 100
            percent = parseFloat(percent);
            return percent / 100 * input;
        }
      , from: total => {
            // ?        ..... total
            // input    ..... 100
            total = parseFloat(total);
            return percentValue(input).get(total);
        }
      , is: howMuch => {
            // howMuch ..... ?
            // input   ..... 100
            howMuch = parseFloat(howMuch);
            return  howMuch * 100 / input;
        }
    };
}

module.exports = percentValue;
