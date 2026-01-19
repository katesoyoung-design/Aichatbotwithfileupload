import svgPaths from "./svg-3thnm4rbqi";

function Icon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_9_6856)" id="Icon">
          <path d={svgPaths.pd80c480} id="Vector" stroke="var(--stroke-0, #FFAB0F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.14062" />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="var(--stroke-0, #FFAB0F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.14062" />
        </g>
        <defs>
          <clipPath id="clip0_9_6856">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="css-4hzbpn font-['Noto_Sans:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#333951] text-[14px] w-[262px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
          ‘카카오톡이미지.jpg’파일이 첨부되었습다.
        </p>
      </div>
    </div>
  );
}

function Alert() {
  return (
    <div className="bg-[#fdf1dc] relative rounded-[4px] shrink-0 w-full" data-name="Alert-1">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[8px] relative w-full">
          <Icon />
          <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
            <Paragraph />
          </div>
        </div>
      </div>
    </div>
  );
}

function Contain() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start pb-0 pt-[8px] px-0 relative shrink-0 w-full" data-name="contain">
      <Alert />
    </div>
  );
}

function Arrow() {
  return (
    <div className="h-[6px] relative shrink-0 w-[10px]" data-name="arrow">
      <div className="absolute inset-[-4.17%_-7.5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5 6.5">
          <g id="arrow">
            <path d={svgPaths.p2be18f20} id="vector-5" stroke="var(--stroke-0, #BDBDBD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ToggleButton() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center pb-[10px] pt-[8px] px-0 relative shrink-0 w-full" data-name="toggle-button">
      <Arrow />
    </div>
  );
}

export default function ToggleAlerts() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center px-[12px] py-0 relative size-full" data-name="toggle_alerts">
      <div aria-hidden="true" className="absolute border-[#f1e8db] border-b border-solid inset-0 pointer-events-none shadow-[0px_6.4px_14.4px_0px_rgba(0,0,0,0.07)]" />
      <Contain />
      <ToggleButton />
    </div>
  );
}