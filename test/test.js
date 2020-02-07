var expect = require("chai").expect;
const Luhn = require("../luhn");

describe("Luhn functions", function() {
  const validStr = "0121154983";
  const unValidStr = "1343187902";
  describe("check", function() {
    it("should return true when passed in a valid Luhn number", function() {
      expect(Luhn.check(validStr)).to.equal(true);
    });
    it("should return false when passed in an unvalid Luhn number", function() {
      expect(Luhn.check(unValidStr)).to.equal(false);
    });
  });
  describe("generateLuhnNum", function() {
    it("should return correct check digit when passed in a valid Luhn number", function() {
      expect(Luhn.generateLuhn(validStr)).to.equal(3);
    });
    it("should not return correct digit when passed in an unValid Luhn number", function() {
      expect(Luhn.generateLuhn(unValidStr)).to.not.equal(2);
    });
  });
  describe("addStrDigits", function() {
    it("should return correct sum number", function() {
      expect(Luhn.addStrDigits(validStr)).to.equal(34);
    });
  });
});
