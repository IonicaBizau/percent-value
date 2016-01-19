const percent = require("../lib")
    , tester = require("tester")
    ;

tester.describe("percent-value", test => {
    test.should("handle percent ... of ...", () => {
        test.expect(percent(10).of(50)).toBe(20);
    });

    test.should("handle percent ... get ...", () => {
        test.expect(percent(50).get(20)).toBe(10);
    });

    test.should("handle percent ... from ...", () => {
        test.expect(percent(20).from(50)).toBe(10);
    });

    test.should("handle percent ... is ...", () => {
        test.expect(percent(20).is(10)).toBe(50);
    });

    test.should("support % char", () => {
        test.expect(percent("10%").from(420)).toBe(42);
    });
});
