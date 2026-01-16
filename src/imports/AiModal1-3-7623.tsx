import svgPaths from "./svg-fv43mlj4l6";
import imgAiModal from "figma:asset/dce6366e28340005db8df9f4715f6f2d10678262.png";

function Img() {
  return (
    <div className="h-[16px] relative shrink-0 w-[22px]" data-name="img">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 16">
        <g clipPath="url(#clip0_1_2512)" id="img">
          <path d={svgPaths.p3a719f00} fill="var(--fill-0, #753DFE)" id="Vector" />
          <path d={svgPaths.p3eaf4300} fill="var(--fill-0, #753DFE)" id="Vector_2" />
          <path d={svgPaths.pb0b7480} fill="var(--fill-0, #753DFE)" id="Vector_3" />
          <path d={svgPaths.pf29e000} fill="var(--fill-0, #753DFE)" id="Vector_4" />
          <path d={svgPaths.p3a20d000} fill="var(--fill-0, #753DFE)" id="Vector_5" />
          <g id="Group">
            <g id="Group_2">
              <path d={svgPaths.p10588900} fill="var(--fill-0, #753DFE)" id="Vector_6" />
              <path d={svgPaths.p302ce980} fill="var(--fill-0, #753DFE)" id="Vector_7" />
            </g>
            <path d={svgPaths.p4f3c780} fill="var(--fill-0, #753DFE)" id="Vector_8" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_2512">
            <rect fill="white" height="16" width="22" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Logo() {
  return (
    <div className="relative rounded-[33554400px] shrink-0 size-[32px]" data-name="logo" style={{ backgroundImage: "linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%), linear-gradient(90deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.3) 100%)" }}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-0 pr-[0.016px] py-0 relative size-full">
        <Img />
      </div>
    </div>
  );
}

function Title() {
  return (
    <div className="relative shrink-0" data-name="Title">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative">
        <p className="css-ew64yg font-['Noto_Sans:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[16px] text-white" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
          MiraeChatbot
        </p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative">
        <Logo />
        <Title />
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[12.5%_16.88%_17.5%_20%]">
      <div className="absolute inset-[-5.36%_-5.94%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.1246 15.5">
          <g id="Group 631210">
            <path d={svgPaths.p1f8ed730} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d={svgPaths.p27d8c900} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="icon">
      <Group />
    </div>
  );
}

function Setting() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[24px]" data-name="setting">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <Icon />
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="icon">
          <path d={svgPaths.p2909ee00} id="maximize" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function FullScreenMaximize() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="fullScreen/maximize">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <Icon1 />
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M15 5L5 15" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M5 5L15 15" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Close() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[24px]" data-name="close">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[8px] py-0 relative size-full">
        <Icon2 />
      </div>
    </div>
  );
}

function Buttons() {
  return (
    <div className="h-[24px] relative shrink-0" data-name="buttons">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] h-full items-center relative">
        <Setting />
        <FullScreenMaximize />
        <Close />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between relative w-full">
          <Container />
          <Buttons />
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[375px] min-w-[375px] px-[16px] py-[8px] relative shrink-0 w-[375px]" data-name="header" style={{ backgroundImage: "linear-gradient(90.7991deg, rgb(116, 158, 253) 4.3084%, rgb(97, 108, 250) 46.66%, rgb(209, 107, 255) 90.269%), linear-gradient(90deg, rgb(21, 93, 252) 0%, rgb(20, 71, 230) 100%)" }}>
      <Container1 />
    </div>
  );
}

function Header1() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center relative shadow-[0px_0.15px_0.45px_0px_rgba(0,0,0,0.14),0px_0.8px_1.8px_0px_rgba(0,0,0,0.12)] shrink-0 w-full" data-name="header">
      <Header />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px min-w-px px-[25.744px] py-[12.872px] relative">
      <p className="css-ew64yg font-['Noto_Sans:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#3786fb] text-[15px] text-center tracking-[-0.24px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        화면도우미
      </p>
    </div>
  );
}

function TabOn() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-center min-h-px min-w-px relative" data-name="Tab on">
      <Frame1 />
      <div className="bg-[#3786fb] h-[3.218px] shrink-0 w-full" />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px min-w-px px-[25.744px] py-[12.872px] relative">
      <p className="css-ew64yg font-['Noto_Sans:SemiCondensed','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#212121] text-[15px] text-center tracking-[-0.24px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 87.5" }}>
        설계사 할일
      </p>
    </div>
  );
}

function Tab() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-center min-h-px min-w-px relative" data-name="Tab">
      <Frame2 />
      <div className="h-[3.218px] shrink-0 w-full" />
    </div>
  );
}

function Tabs() {
  return (
    <div className="bg-white content-stretch flex h-[44px] items-start relative shrink-0 w-full" data-name="Tabs">
      <div aria-hidden="true" className="absolute border-[#cbd5e1] border-b border-solid inset-0 pointer-events-none" />
      <TabOn />
      <Tab />
    </div>
  );
}

function Top() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative rounded-tl-[16px] rounded-tr-[16px] shadow-[0px_0.15px_0.45px_0px_rgba(0,0,0,0.14)] shrink-0 w-full" data-name="top">
      <Header1 />
      <Tabs />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icon">
          <circle cx="8" cy="8" id="elipse" r="6" stroke="url(#paint0_linear_1_2557)" strokeWidth="4" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_2557" x1="3.5" x2="14" y1="2.5" y2="14.5">
            <stop stopColor="#835EF9" />
            <stop offset="0.956653" stopColor="#30BFE2" />
          </linearGradient>
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
    <div className="bg-gradient-to-r from-[#e6ebff] relative rounded-[4px] shrink-0 to-[#e1f8fe] w-full" data-name="Alert-1">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[8px] relative w-full">
          <Icon3 />
          <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
            <Paragraph />
          </div>
        </div>
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_2548)" id="Icon">
          <path d={svgPaths.pd80c480} id="Vector" stroke="var(--stroke-0, #AE67E3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.14062" />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="var(--stroke-0, #AE67E3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.14062" />
        </g>
        <defs>
          <clipPath id="clip0_1_2548">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-full">
        <p className="css-4hzbpn flex-[1_0_0] font-['Noto_Sans:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px relative text-[#333951] text-[14px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
          홍길동(38세,남) 고객의 고지대상 질병이 등록되었습니다. 질병별 질문항목을 확인해주세요.
        </p>
      </div>
    </div>
  );
}

function Alert1() {
  return (
    <div className="bg-[#f0e3fe] relative rounded-[4px] shrink-0 w-full" data-name="Alert-2">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[8px] relative w-full">
          <Icon4 />
          <Paragraph1 />
        </div>
      </div>
    </div>
  );
}

function Contain() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start pb-0 pt-[8px] px-0 relative shrink-0 w-full" data-name="contain">
      <Alert />
      <Alert1 />
    </div>
  );
}

function Arrow() {
  return (
    <div className="h-[6px] relative shrink-0 w-[10px]" data-name="arrow">
      <div className="absolute inset-[-4.17%_-7.5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5 6.5">
          <g id="arrow">
            <path d={svgPaths.p2be18f20} id="vector-5" stroke="var(--stroke-0, #397EEE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
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

function ToggleAlerts() {
  return (
    <div className="relative shrink-0 w-full" data-name="toggle_alerts">
      <div aria-hidden="true" className="absolute border-[#bedbff] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[12px] py-0 relative w-full">
          <Contain />
          <ToggleButton />
        </div>
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Paragraph">
      <div className="css-g0mm18 font-['Noto_Sans:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#101828] text-[14px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <p className="css-ew64yg mb-0">안녕하세요. 고객등록을 위해 관련 서류를</p>
        <p className="css-ew64yg">첨부하거나 고객정보를 입력해주세요.</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Paragraph2 />
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start px-[12px] py-[6px] relative rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0" data-name="Container">
      <Frame />
    </div>
  );
}

function Chat2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="chat2">
      <Container2 />
    </div>
  );
}

function FileEarmarkImage() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="file-earmark-image">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="file-earmark-image">
          <path clipRule="evenodd" d={svgPaths.pca51600} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p14fbd580} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative">
        <p className="css-ew64yg font-['Noto_Sans:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[14px] text-white" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
          카카오톡이미지.jpg
        </p>
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="content-stretch flex gap-[4px] h-[20px] items-center max-w-[250px] relative shrink-0 w-full" data-name="Paragraph">
      <FileEarmarkImage />
      <Frame3 />
    </div>
  );
}

function Bubble() {
  return (
    <div className="bg-[#5d90fa] content-stretch flex flex-col items-end px-[12px] py-[6px] relative rounded-[8px] shrink-0" data-name="💬Bubble">
      <Paragraph3 />
    </div>
  );
}

function Chat1() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="chat1">
      <Bubble />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="content-stretch flex items-start max-w-[250px] relative shrink-0" data-name="Paragraph">
      <p className="css-ew64yg font-['Noto_Sans:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#101828] text-[14px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        아래 정보가 추출되어 자동입력 되었습니다.
      </p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="content-stretch flex items-start max-w-[250px] relative shrink-0" data-name="Paragraph">
      <div className="css-g0mm18 font-['Noto_Sans:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#101828] text-[14px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <p className="css-ew64yg mb-0">이름: 홍길동</p>
        <p className="css-ew64yg mb-0">주민등록번호: 870211-1******</p>
        <p className="css-ew64yg">주소: 서울특별시 영등포구 국제금융로 79</p>
      </div>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="content-stretch flex items-start max-w-[250px] relative shrink-0" data-name="Paragraph">
      <div className="css-g0mm18 font-['Noto_Sans:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#101828] text-[14px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <p className="css-ew64yg mb-0">{`추가로 입력하거나 수정할 내용이 있으면 `}</p>
        <p className="css-ew64yg">작성해주세요.</p>
      </div>
    </div>
  );
}

function MessageText() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start max-w-[250px] relative shrink-0" data-name="Message text">
      <Paragraph4 />
      <Paragraph5 />
      <Paragraph6 />
    </div>
  );
}

function Bubble1() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start px-[12px] py-[6px] relative rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0" data-name="💬Bubble">
      <MessageText />
    </div>
  );
}

function Chat3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="chat2">
      <Bubble1 />
    </div>
  );
}

function FileEarmarkImage1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="file-earmark-image">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="file-earmark-image">
          <path clipRule="evenodd" d={svgPaths.pca51600} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p14fbd580} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative">
        <p className="css-ew64yg font-['Noto_Sans:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[14px] text-white" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
          진료확인서.jpg
        </p>
      </div>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="content-stretch flex gap-[4px] h-[20px] items-center max-w-[250px] relative shrink-0 w-full" data-name="Paragraph">
      <FileEarmarkImage1 />
      <Frame4 />
    </div>
  );
}

function Bubble2() {
  return (
    <div className="bg-[#5d90fa] content-stretch flex flex-col items-end px-[12px] py-[6px] relative rounded-[8px] shrink-0" data-name="💬Bubble">
      <Paragraph7 />
    </div>
  );
}

function Chat4() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="chat1">
      <Bubble2 />
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="content-stretch flex items-start max-w-[250px] relative shrink-0" data-name="Paragraph">
      <div className="css-g0mm18 font-['Noto_Sans:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#101828] text-[14px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <p className="css-ew64yg mb-0">첨부된 파일을 분석환 결과 고지대상 질병</p>
        <p className="css-ew64yg">2건이 감지되었습니다.</p>
      </div>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="content-stretch flex items-start max-w-[250px] relative shrink-0" data-name="Paragraph">
      <div className="css-g0mm18 font-['Noto_Sans:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#101828] text-[14px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <p className="css-ew64yg mb-0">-E11 제2형 당뇨병</p>
        <p className="css-ew64yg">-l10 고혈압</p>
      </div>
    </div>
  );
}

function Paragraph10() {
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

function MessageText1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start max-w-[250px] relative shrink-0" data-name="Message text">
      <Paragraph8 />
      <Paragraph9 />
      <Paragraph10 />
      <Component1stRowOfButtons />
    </div>
  );
}

function Bubble3() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start px-[12px] py-[6px] relative rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0" data-name="💬Bubble">
      <MessageText1 />
    </div>
  );
}

function Chat5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="chat2">
      <Bubble3 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative">
        <p className="css-ew64yg font-['Noto_Sans:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[14px] text-white" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
          네
        </p>
      </div>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="content-stretch flex gap-[4px] h-[20px] items-center max-w-[250px] relative shrink-0 w-full" data-name="Paragraph">
      <Frame5 />
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-[#5d90fa] content-stretch flex flex-col items-end px-[12px] py-[6px] relative rounded-[8px] shrink-0" data-name="Container">
      <Paragraph11 />
    </div>
  );
}

function Chat6() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="chat1">
      <Container3 />
    </div>
  );
}

function Chat() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="chat" style={{ backgroundImage: "linear-gradient(121.978deg, rgba(240, 245, 253, 0.2) 20.555%, rgba(146, 181, 254, 0.2) 97.413%), linear-gradient(116.339deg, rgb(224, 237, 254) 8.5059%, rgb(207, 227, 255) 68.12%)" }}>
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative size-full">
          <Chat2 />
          <Chat1 />
          <Chat3 />
          <Chat4 />
          <Chat5 />
          <Chat6 />
        </div>
      </div>
    </div>
  );
}

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

function AttachFile() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[40px]" data-name="Attach File">
      <Plus />
    </div>
  );
}

function ComposeBox() {
  return (
    <div className="bg-white flex-[1_0_0] h-[40px] min-h-px min-w-px relative rounded-[8px]" data-name="Compose Box">
      <div aria-hidden="true" className="absolute border border-[#e1e1e1] border-solid inset-0 pointer-events-none rounded-[8px]" />
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

function Send() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Send">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Send">
          <path d={svgPaths.pb08c800} fill="var(--fill-0, #5B5FC7)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function ComposeBarInputLight() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Compose bar / Input / Light">
      <AttachFile />
      <ComposeBox />
      <Send />
    </div>
  );
}

function Bottom() {
  return (
    <div className="bg-gradient-to-r from-[#dbeafe] relative shrink-0 to-[#eff6ff] w-full" data-name="bottom">
      <div aria-hidden="true" className="absolute border-[#bedbff] border-solid border-t-[1.067px] inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start px-[16px] py-[12px] relative w-full">
        <ComposeBarInputLight />
      </div>
    </div>
  );
}

function ChatWidget() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[800px] items-center max-w-[375px] min-w-[375px] overflow-clip relative rounded-[16px] shadow-[0px_4px_16px_4px_rgba(0,0,0,0.15),0px_25px_50px_-12px_rgba(0,0,0,0.25)] shrink-0 w-[375px]" data-name="ChatWidget">
      <Top />
      <ToggleAlerts />
      <Chat />
      <Bottom />
    </div>
  );
}

function InputForms() {
  return (
    <div className="content-stretch flex gap-[24px] items-end justify-end relative shrink-0" data-name="input forms">
      <ChatWidget />
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[800px] relative shrink-0" data-name="container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col h-full items-end justify-end relative">
        <InputForms />
      </div>
    </div>
  );
}

function Subtract() {
  return (
    <div className="absolute left-1/2 overflow-clip size-[16px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Subtract">
      <div className="absolute bg-white h-px left-1/2 rounded-[1px] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[10px]" data-name="Shape" />
    </div>
  );
}

function ControlButton() {
  return (
    <div className="overflow-clip relative shrink-0 size-[40px]" data-name="Control-button">
      <Subtract />
    </div>
  );
}

function Maximize() {
  return (
    <div className="absolute left-1/2 size-[16px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Maximize">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Maximize">
          <path d={svgPaths.p3fc3b200} fill="var(--fill-0, white)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function ControlButton1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[40px]" data-name="Control-button">
      <Maximize />
    </div>
  );
}

function Dismiss() {
  return (
    <div className="absolute left-1/2 size-[16px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Dismiss">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Dismiss">
          <path d={svgPaths.p383b2300} fill="var(--fill-0, white)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function ControlButton2() {
  return (
    <div className="overflow-clip relative shrink-0 size-[40px]" data-name="Control-button">
      <Dismiss />
    </div>
  );
}

function Controls() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="controls">
      <ControlButton />
      <ControlButton1 />
      <ControlButton2 />
    </div>
  );
}

function Buttons1() {
  return (
    <div className="absolute right-0 top-0" data-name="buttons">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative">
        <Controls />
      </div>
    </div>
  );
}

function DimPopup() {
  return (
    <div className="bg-[rgba(0,0,0,0)] flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="dim popup">
      <div className="flex flex-row items-end justify-end size-full">
        <div className="content-stretch flex items-end justify-end p-[40px] relative size-full">
          <Container4 />
          <Buttons1 />
        </div>
      </div>
    </div>
  );
}

function AiModal() {
  return (
    <div className="absolute content-stretch flex flex-col h-[885px] items-end justify-end left-0 top-0 w-[1918px]" data-name="ai-modal">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgAiModal} />
      <DimPopup />
    </div>
  );
}

export default function AiModal1() {
  return (
    <div className="bg-white relative size-full" data-name="ai modal-1">
      <AiModal />
    </div>
  );
}