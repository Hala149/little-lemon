import { fetchAPI } from "../api";
import { initializeTimes, updateTimes } from "../Main"; // عدّل حسب مسار الوظائف

// نعمل mock للـ fetchAPI
jest.mock("../api", () => ({
  fetchAPI: jest.fn(),
}));

describe("Booking times", () => {
  beforeEach(() => {
    // كل اختبار يبدأ بمصفوفة أوقات متاحة محددة
    fetchAPI.mockReturnValue(["17:00", "18:00", "19:00"]);
  });

  test("initializeTimes returns available times for today", () => {
    const today = new Date();
    const times = initializeTimes(today); // أو أي طريقة تنادي الوظيفة
    expect(times.length).toBeGreaterThan(0);
    expect(times).toContain("17:00");
  });

  test("updateTimes returns available times for a given date", () => {
    const date = new Date("2026-02-15");
    const times = updateTimes(date);
    expect(times).toContain("17:00");
    expect(times).toContain("18:00");
  });
});
