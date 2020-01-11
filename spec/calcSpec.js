describe("Calculator", function() {
    describe("Addition tests", function() {
        it("should return 42", function() {
            expect(addition(20,22)).toBe(42);
        });
        it("should return 26", function() {
            expect(addition(9, 17)).toBe(26);
        })
    });
});

