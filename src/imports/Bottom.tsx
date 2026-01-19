import svgPaths from "./svg-9sety0i3zq";

function Group() {
  return (
    <div className="relative shrink-0 size-[18px]">
      <div className="absolute inset-[-5.56%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <g id="Group 631208">
            <path d={svgPaths.p3e264b00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function AttachFile() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip p-[3px] relative shrink-0 size-[40px]" data-name="Attach File">
      <Group />
    </div>
  );
}

function ComposeBox() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] flex-[1_0_0] h-[40px] min-h-px min-w-px relative rounded-[14px]" data-name="Compose Box">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
          <p className="css-4hzbpn font-['Noto_Sans:SemiCondensed','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[14px] text-white tracking-[-0.408px] w-[145px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 87.5" }}>
            메세지를 입력하세요.
          </p>
        </div>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_9_6867)" id="Icon">
          <path d={svgPaths.p37377780} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3bfcbca0} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_9_6867">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Send() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[10px] shrink-0 size-[40px]" data-name="Send" style={{ backgroundImage: "linear-gradient(137.397deg, rgb(21, 93, 252) 5.2398%, rgb(160, 51, 255) 89.371%), linear-gradient(90deg, rgb(0, 184, 219) 0%, rgb(43, 127, 255) 100%)" }}>
      <Icon />
    </div>
  );
}

function ComposeBarInputDark() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Compose bar / Input / Dark">
      <AttachFile />
      <ComposeBox />
      <Send />
    </div>
  );
}

export default function Bottom() {
  return (
    <div className="content-stretch flex flex-col items-start px-[16px] py-[12px] relative size-full" data-name="bottom">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.1)] border-solid border-t-[1.067px] inset-0 pointer-events-none" />
      <ComposeBarInputDark />
    </div>
  );
}