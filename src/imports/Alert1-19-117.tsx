import svgPaths from "./svg-9hpw0zgkt6";

function Icon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_9_6881)" id="Icon">
          <path d={svgPaths.pd80c480} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.14062" />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.14062" />
        </g>
        <defs>
          <clipPath id="clip0_9_6881">
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
        <p className="css-4hzbpn font-['Noto_Sans:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-white w-[262px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
          ‘카카오톡이미지.jpg’파일이 첨부되었습다.
        </p>
      </div>
    </div>
  );
}

export default function Alert() {
  return (
    <div className="content-stretch flex gap-[8px] items-center px-[17px] py-[9px] relative rounded-[4px] size-full" data-name="Alert-1" style={{ backgroundImage: "linear-gradient(90deg, rgb(255, 111, 0) 0%, rgb(254, 153, 1) 100%), linear-gradient(90deg, rgb(253, 241, 220) 0%, rgb(253, 241, 220) 100%)" }}>
      <div aria-hidden="true" className="absolute border border-[rgba(255,171,15,0.7)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Icon />
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Paragraph />
      </div>
    </div>
  );
}