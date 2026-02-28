import { generate2dBahtinovMaskShape } from "./MeshGenerators";

const CURVE_SEGMENTS = 64;

function pointsToPathData(points) {
  if (points.length === 0) return "";
  let d = `M ${points[0].x},${points[0].y}`;
  for (let i = 1; i < points.length; i++) {
    d += ` L ${points[i].x},${points[i].y}`;
  }
  d += " Z";
  return d;
}

export function generateBahtinovMaskSVG({ focalLength, apertureDiameter, telescopeInnerDiameter }) {
  const shape = generate2dBahtinovMaskShape({ focalLength, apertureDiameter, telescopeInnerDiameter });

  const outerPoints = shape.getPoints(CURVE_SEGMENTS);
  const outerPath = pointsToPathData(outerPoints);

  const holePaths = shape.holes.map((hole) => {
    const pts = hole.getPoints(CURVE_SEGMENTS);
    return pointsToPathData(pts);
  });

  const combinedPath = [outerPath, ...holePaths].join(" ");

  const r = telescopeInnerDiameter / 2;
  const padding = 1;
  const vbMin = -r - padding;
  const vbSize = (r + padding) * 2;

  return [
    `<svg xmlns="http://www.w3.org/2000/svg"`,
    `     width="${telescopeInnerDiameter + padding * 2}mm"`,
    `     height="${telescopeInnerDiameter + padding * 2}mm"`,
    `     viewBox="${vbMin} ${vbMin} ${vbSize} ${vbSize}">`,
    `  <path d="${combinedPath}" fill="black" fill-rule="evenodd" />`,
    `</svg>`,
  ].join("\n");
}

export function downloadSVG({ focalLength, apertureDiameter, telescopeInnerDiameter, filename }) {
  const svgString = generateBahtinovMaskSVG({ focalLength, apertureDiameter, telescopeInnerDiameter });
  const blob = new Blob([svgString], { type: "image/svg+xml" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
}
