import svgPaths from "./svg-wrqeomc2uq";

function AttachFile() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Attach File">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Attach File">
          <g id="Group 631208">
            <path d={svgPaths.p1fa6e700} id="Vector" stroke="var(--stroke-0, #1A309C)" strokeLinecap="round" strokeWidth="2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ComposeBox() {
  return (
    <div className="flex-[1_0_0] h-[40px] min-h-px min-w-px relative" data-name="Compose Box">
      <div aria-hidden="true" className="absolute border-[#e1e2e4] border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] py-0 relative size-full">
          <p className="css-4hzbpn font-['Noto_Sans:SemiCondensed','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#6e6e6e] text-[14px] tracking-[-0.408px] w-[145px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 87.5" }}>
            메세지를 입력하세요.
          </p>
        </div>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p15a46a00} id="Vector" stroke="var(--stroke-0, #1A309C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p136f3380} id="Vector_2" stroke="var(--stroke-0, #1A309C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Send() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip p-[2px] relative shrink-0 size-[40px]" data-name="Send">
      <Icon />
    </div>
  );
}

function ComposeBarInputLight() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Compose bar / Input / Light">
      <AttachFile />
      <ComposeBox />
      <Send />
    </div>
  );
}

export default function Bottom() {
  return (
    <div className="bg-[#f0f0f3] content-stretch flex flex-col items-start px-[16px] py-[12px] relative size-full" data-name="bottom">
      <div aria-hidden="true" className="absolute border-[#e5e6e8] border-solid border-t-[1.067px] inset-0 pointer-events-none" />
      <ComposeBarInputLight />
    </div>
  );
}