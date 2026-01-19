function Paragraph() {
  return (
    <div className="content-stretch flex items-start max-w-[250px] relative shrink-0" data-name="Paragraph">
      <div className="css-g0mm18 font-['Noto_Sans:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#101828] text-[14px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <p className="css-ew64yg mb-0">첨부된 파일을 분석환 결과 고지대상 질병</p>
        <p className="css-ew64yg">2건이 감지되었습니다.</p>
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="content-stretch flex items-start max-w-[250px] relative shrink-0" data-name="Paragraph">
      <div className="css-g0mm18 font-['Noto_Sans:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#101828] text-[14px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <p className="css-ew64yg mb-0">-E11 제2형 당뇨병</p>
        <p className="css-ew64yg">-l10 고혈압</p>
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="content-stretch flex items-start max-w-[250px] relative shrink-0" data-name="Paragraph">
      <p className="css-ew64yg font-['Noto_Sans:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#101828] text-[14px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        병력고지에 반영하시겠습니까?
      </p>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex gap-[4px] h-[18px] items-center overflow-clip relative shrink-0" data-name="Content">
      <div className="css-g0mm18 flex flex-col font-['Noto_Sans:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#5b5fc7] text-[13px] text-center tracking-[-0.078px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <p className="css-ew64yg leading-[18px]">예</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex flex-col items-center px-[8px] py-[5px] relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#9299f7] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Content />
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex gap-[4px] h-[18px] items-center overflow-clip relative shrink-0" data-name="Content">
      <div className="css-g0mm18 flex flex-col font-['Noto_Sans:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#5b5fc7] text-[13px] text-center tracking-[-0.078px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <p className="css-ew64yg leading-[18px]">아니요</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex flex-col items-center px-[8px] py-[5px] relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#9299f7] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Content1 />
    </div>
  );
}

function Component1stRowOfButtons() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="1st row of buttons">
      <Button />
      <Button1 />
    </div>
  );
}

function MessageText() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start max-w-[250px] relative shrink-0" data-name="Message text">
      <Paragraph />
      <Paragraph1 />
      <Paragraph2 />
      <Component1stRowOfButtons />
    </div>
  );
}

export default function Bubble() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start px-[12px] py-[6px] relative rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] size-full" data-name="💬Bubble">
      <MessageText />
    </div>
  );
}