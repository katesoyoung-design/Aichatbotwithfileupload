import svgPaths from "./svg-0kaph5y4uv";

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

export default function Alert() {
  return (
    <div className="bg-[#fdf1dc] content-stretch flex gap-[8px] items-center px-[16px] py-[8px] relative rounded-[4px] size-full" data-name="Alert-1">
      <Icon />
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Paragraph />
      </div>
    </div>
  );
}