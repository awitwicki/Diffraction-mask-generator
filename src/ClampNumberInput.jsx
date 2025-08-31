// ClampNumberInput.jsx
// Reusable numeric input that:
// - keeps local editable value while typing
// - clamps to [min, max] on blur or Enter
// - calls onUpdate(clampedNumber) when committing (so parent model is updated only with valid/clamped numbers)
// - syncs when parent value, min or max change

import React, { useEffect, useState } from "react";

export default function ClampNumberInput({
  value,
  min = -Infinity,
  max = Infinity,
  step = 1,
  id,
  onUpdate,
  className,
  ...rest
}) {
  // local string state so user can type freely (partial numbers, empty string, etc.)
  const [local, setLocal] = useState(value == null ? "" : String(value));

  // sync when parent value changes
  useEffect(() => {
    setLocal(value == null ? "" : String(value));
  }, [value]);

  // if min/max changed and current local value is out of new bounds, snap the displayed value
  useEffect(() => {
    const n = Number(local);
    if (!Number.isNaN(n)) {
      const clamped = clampNumber(n, min, max);
      if (clamped !== n) setLocal(String(clamped));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [min, max]);

  function clampNumber(v, minV, maxV) {
    let n = Number(v);
    if (Number.isNaN(n)) {
      // if not a number (empty input), fallback to min if finite, otherwise 0
      if (isFinite(minV)) n = minV;
      else n = 0;
    }
    if (isFinite(minV)) n = Math.max(n, Number(minV));
    if (isFinite(maxV)) n = Math.min(n, Number(maxV));
    return n;
  }

  function commit(raw) {
    const clamped = clampNumber(raw, min, max);
    setLocal(String(clamped));
    if (typeof onUpdate === "function") onUpdate(clamped);
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      // commit on Enter
      commit(local);
      // blur to close on-screen keyboards etc.
      e.currentTarget.blur();
    }
  }

  return (
    <input
      id={id}
      type="number"
      value={local}
      min={min}
      max={max}
      step={step}
      onChange={(e) => setLocal(e.target.value)}
      onBlur={(e) => commit(e.target.value)}
      onKeyDown={handleKeyDown}
      className={className}
      {...rest}
    />
  );
}

/*
  --- Usage examples (copy into your App) ---

  // native input replacement (focalLength)
  <ClampNumberInput
    value={focalLength}
    min={25}
    max={3000}
    step={1}
    onUpdate={setFocalLength}
  />

  --- Notes ---
  - onUpdate receives a Number (already clamped). Parent state should be updated there.
  - While typing, parent state is NOT updated (so the 100->5 flicker you had will disappear).
  - Commit happens on blur and when user presses Enter.
  - The component also syncs its displayed value when parent value or min/max change.
*/
