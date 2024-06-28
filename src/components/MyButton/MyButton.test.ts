import { getButtonStyles } from './MyButton.lib';

describe('getButtonStyles', () => {
  it('returns correct styles when disabled', () => {
    const styles = getButtonStyles(true, {});
    expect(styles).toEqual({
      backgroundColor: "#6c757d",
      color: "#ccc",
      hoverColor: "#6c757d",
      activeColor: "#6c757d",
    });
  });

  it('returns correct styles when enabled with custom colors', () => {
    const styles = getButtonStyles(false, {
      backgroundColor: "#123456",
      color: "#abcdef",
      hoverColor: "#654321",
      activeColor: "#fedcba",
    });
    expect(styles).toEqual({
      backgroundColor: "#123456",
      color: "#abcdef",
      hoverColor: "#654321",
      activeColor: "#fedcba",
    });
  });

  it('returns default styles when enabled without custom colors', () => {
    const styles = getButtonStyles(false, {});
    expect(styles).toEqual({
      backgroundColor: "#007BFF",
      color: "#fff",
      hoverColor: "#0056b3",
      activeColor: "#004494",
    });
  });
});
