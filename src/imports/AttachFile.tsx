import svgPaths from "./svg-hbl9rx2zvb";

function Plus() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Plus">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Plus">
          <path d={svgPaths.p1c423f00} fill="var(--fill-0, #5B5FC7)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

export default function AttachFile() {
  return (
    <div className="content-stretch flex items-center justify-center relative size-full" data-name="Attach File">
      <Plus />
    </div>
  );
}