import svgPaths from "./svg-y1dcp2g7r4";

function Img() {
  return (
    <div className="h-[16px] relative shrink-0 w-[22px]" data-name="img">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 16">
        <g clipPath="url(#clip0_9_6874)" id="img">
          <g id="Vector">
            <path d={svgPaths.p3b10bf00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p2fea4480} fill="var(--fill-0, white)" />
            <path d={svgPaths.pb0b7480} fill="var(--fill-0, white)" />
            <path d={svgPaths.p1a44f780} fill="var(--fill-0, white)" />
            <path d={svgPaths.p3a20d000} fill="var(--fill-0, white)" />
            <path d={svgPaths.p10588900} fill="var(--fill-0, white)" />
            <path d={svgPaths.p302ce980} fill="var(--fill-0, white)" />
            <path d={svgPaths.p26e94400} fill="var(--fill-0, white)" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_9_6874">
            <rect fill="white" height="16" width="22" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Logo() {
  return (
    <div className="bg-[rgba(0,0,0,0.3)] relative rounded-[33554400px] shrink-0 size-[32px]" data-name="logo">
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

function Group1() {
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
      <Group1 />
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
    <div className="content-stretch flex flex-col items-start max-w-[375px] min-w-[375px] overflow-clip px-[16px] py-[8px] relative shrink-0 w-[375px]" data-name="header" style={{ backgroundImage: "linear-gradient(127.407deg, rgb(9, 84, 245) 3.1327%, rgb(100, 98, 242) 95.724%)" }}>
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

function Frame3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px min-w-px px-[25.744px] py-[12.872px] relative">
      <p className="css-ew64yg font-['Noto_Sans:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#01ccff] text-[15px] text-center tracking-[-0.24px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        화면도우미
      </p>
    </div>
  );
}

function TabOn() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-center min-h-px min-w-px relative" data-name="Tab on">
      <Frame3 />
      <div className="bg-[#01ccff] h-[3.218px] shrink-0 w-full" />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px min-w-px px-[25.744px] py-[12.872px] relative">
      <p className="css-ew64yg font-['Noto_Sans:SemiCondensed','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[15px] text-[rgba(255,255,255,0.7)] text-center tracking-[-0.24px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 87.5" }}>
        설계사 할일
      </p>
    </div>
  );
}

function Tab() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-center min-h-px min-w-px relative" data-name="Tab">
      <Frame4 />
      <div className="h-[3.218px] shrink-0 w-full" />
    </div>
  );
}

function Tabs() {
  return (
    <div className="content-stretch flex h-[44px] items-start relative shrink-0 w-full" data-name="Tabs" style={{ backgroundImage: "linear-gradient(180.15deg, rgb(26, 60, 183) 10.365%, rgb(23, 38, 88) 98.658%)" }}>
      <TabOn />
      <Tab />
    </div>
  );
}

function Icon3() {
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

function Alert() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Alert-1" style={{ backgroundImage: "linear-gradient(90deg, rgb(255, 111, 0) 0%, rgb(254, 153, 1) 100%), linear-gradient(90deg, rgb(253, 241, 220) 0%, rgb(253, 241, 220) 100%)" }}>
      <div aria-hidden="true" className="absolute border border-[rgba(255,171,15,0.7)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[17px] py-[9px] relative w-full">
          <Icon3 />
          <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
            <Paragraph />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col h-[56px] items-center justify-center left-0 top-1/2 translate-y-[-50%] w-[32px]" style={{ backgroundImage: "linear-gradient(93.2015deg, rgb(9, 84, 245) 3.1327%, rgb(100, 98, 242) 95.724%)" }}>
      <p className="css-4hzbpn font-['Arimo:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[12px] text-center text-white w-[16px]">알림</p>
    </div>
  );
}

function Alert1() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] relative rounded-[4px] shrink-0 w-full" data-name="Alert-2">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[40px] py-[8px] relative w-full">
          <p className="css-4hzbpn font-['Arimo:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-white w-[274px]">홍길동(38세,남) 고객의 고지대상 질병이 등록되었습니다. 질병별 질문항목을 확인해주세요.</p>
          <Frame />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[4px]" />
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

function ToggleBtn() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center pb-[10px] pt-[8px] px-0 relative shrink-0 w-full" data-name="toggle-btn">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg]">
          <div className="h-[5px] relative w-[10px]" data-name="vector-5">
            <div className="absolute inset-[-15%_-7.5%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5 6.5">
                <path d={svgPaths.p3d2c9380} id="vector-5" stroke="var(--stroke-0, #397EEE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ToggleAlerts() {
  return (
    <div className="relative shadow-[0px_6.4px_14.4px_0px_rgba(0,0,0,0.07)] shrink-0 w-full" data-name="toggle_alerts" style={{ backgroundImage: "linear-gradient(180.462deg, rgb(26, 60, 183) 10.365%, rgb(23, 38, 88) 98.658%)" }}>
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[12px] py-0 relative w-full">
          <Contain />
          <ToggleBtn />
        </div>
      </div>
    </div>
  );
}

function Top() {
  return (
    <div className="relative rounded-tl-[16px] rounded-tr-[16px] shrink-0 w-full" data-name="top">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <Header1 />
        <Tabs />
        <ToggleAlerts />
      </div>
    </div>
  );
}

function FileEarmarkImage() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="file-earmark-image">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="file-earmark-image">
          <path clipRule="evenodd" d={svgPaths.pca51600} fill="var(--fill-0, #111F62)" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p14fbd580} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative">
        <p className="css-ew64yg font-['Noto_Sans:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#111f62] text-[14px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
          카카오톡이미지.jpg
        </p>
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="content-stretch flex gap-[4px] h-[20px] items-center max-w-[250px] relative shrink-0 w-full" data-name="Paragraph">
      <FileEarmarkImage />
      <Frame5 />
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-white content-stretch flex flex-col items-end px-[12px] py-[6px] relative rounded-[8px] shrink-0" data-name="Container">
      <Paragraph1 />
    </div>
  );
}

function Chat() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="chat1">
      <Container2 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="content-stretch flex items-start max-w-[250px] relative shrink-0" data-name="Paragraph">
      <p className="css-ew64yg font-['Noto_Sans:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[14px] text-white" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        아래 정보가 추출되어 자동입력 되었습니다.
      </p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="content-stretch flex items-start max-w-[250px] relative shrink-0" data-name="Paragraph">
      <div className="css-g0mm18 font-['Noto_Sans:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[14px] text-white" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <p className="css-ew64yg mb-0">이름: 홍길동</p>
        <p className="css-ew64yg mb-0">주민등록번호: 870211-1******</p>
        <p className="css-ew64yg">주소: 서울특별시 영등포구 국제금융로 79</p>
      </div>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="content-stretch flex items-start max-w-[250px] relative shrink-0" data-name="Paragraph">
      <div className="css-g0mm18 font-['Noto_Sans:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[14px] text-white" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <p className="css-ew64yg mb-0">{`추가로 입력하거나 수정할 내용이 있으면 `}</p>
        <p className="css-ew64yg">작성해주세요.</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start max-w-[250px] relative shrink-0">
      <Paragraph2 />
      <Paragraph3 />
      <Paragraph4 />
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] content-stretch flex flex-col items-start px-[12px] py-[6px] relative rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0" data-name="Container">
      <Frame1 />
    </div>
  );
}

function Chat1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="chat2">
      <Container3 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative">
        <p className="css-ew64yg font-['Arimo:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#111f62] text-[14px]">사무직. 연락처 010-1234-5678</p>
      </div>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="content-stretch flex gap-[4px] h-[20px] items-center max-w-[250px] relative shrink-0 w-full" data-name="Paragraph">
      <Frame6 />
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-white content-stretch flex flex-col items-end px-[12px] py-[6px] relative rounded-[8px] shrink-0" data-name="Container">
      <Paragraph5 />
    </div>
  );
}

function Chat2() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="chat1">
      <Container4 />
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="content-stretch flex items-start max-w-[250px] relative shrink-0" data-name="Paragraph">
      <p className="css-ew64yg font-['Noto_Sans:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[14px] text-white" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        아래 정보가 자동입력 되었습니다.
      </p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="content-stretch flex items-start max-w-[250px] relative shrink-0" data-name="Paragraph">
      <div className="css-g0mm18 font-['Noto_Sans:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[14px] text-white" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <p className="css-ew64yg mb-0">직업: 사무직종사자</p>
        <p className="css-ew64yg">휴대폰번호: 010-1234-5678</p>
      </div>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="content-stretch flex items-start max-w-[250px] relative shrink-0" data-name="Paragraph">
      <div className="css-g0mm18 font-['Noto_Sans:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[14px] text-white" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <p className="css-ew64yg mb-0">{`추가로 입력하거나 수정할 내용이 있으면 `}</p>
        <p className="css-ew64yg">작성해주세요.</p>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex gap-[4px] h-[18px] items-center overflow-clip relative shrink-0" data-name="Content">
      <div className="css-g0mm18 flex flex-col font-['Noto_Sans:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[13px] text-center text-white tracking-[-0.078px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <p className="css-ew64yg leading-[18px]">예</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex flex-col items-center px-[8px] py-[5px] relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[4px]" />
      <Content />
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex gap-[4px] h-[18px] items-center overflow-clip relative shrink-0" data-name="Content">
      <div className="css-g0mm18 flex flex-col font-['Noto_Sans:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[13px] text-center text-white tracking-[-0.078px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <p className="css-ew64yg leading-[18px]">아니요</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex flex-col items-center px-[8px] py-[5px] relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[4px]" />
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

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start max-w-[250px] relative shrink-0">
      <Paragraph6 />
      <Paragraph7 />
      <Paragraph8 />
      <Component1stRowOfButtons />
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] content-stretch flex flex-col items-start px-[12px] py-[6px] relative rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0" data-name="Container">
      <Frame2 />
    </div>
  );
}

function Chat3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="chat2">
      <Container5 />
    </div>
  );
}

function Body() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="body">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start p-[16px] relative size-full">
          <Chat />
          <Chat1 />
          <Chat2 />
          <Chat3 />
        </div>
      </div>
    </div>
  );
}

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

function Icon4() {
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
      <Icon4 />
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

function Bottom() {
  return (
    <div className="relative shrink-0 w-full" data-name="bottom">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.1)] border-solid border-t-[1.067px] inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[16px] py-[12px] relative w-full">
        <ComposeBarInputDark />
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Content">
      <p className="css-ew64yg font-['Noto_Sans:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#99a1af] text-[16px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        배경선택
      </p>
    </div>
  );
}

function Title1() {
  return (
    <div className="relative shrink-0 w-full" data-name="title">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[14px] py-[10px] relative w-full">
          <Content2 />
        </div>
      </div>
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Content">
      <p className="css-ew64yg font-['Noto_Sans:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#181d27] text-[16px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        블루퍼플
      </p>
    </div>
  );
}

function SelectMenuItem() {
  return (
    <div className="relative shrink-0 w-full" data-name="_Select menu item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[14px] py-[10px] relative w-full">
          <Content3 />
        </div>
      </div>
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Content">
      <p className="css-ew64yg font-['Noto_Sans:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#181d27] text-[16px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        미래에셋 AI
      </p>
    </div>
  );
}

function SelectMenuItem1() {
  return (
    <div className="relative shrink-0 w-full" data-name="_Select menu item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[14px] py-[10px] relative w-full">
          <Content4 />
        </div>
      </div>
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Content">
      <p className="css-ew64yg font-['Noto_Sans:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#181d27] text-[16px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        밤우주
      </p>
    </div>
  );
}

function Check() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="check">
          <path d={svgPaths.p32ddfd00} id="Icon" stroke="var(--stroke-0, #7F56D9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function SelectMenuClicked() {
  return (
    <div className="bg-[#fafafa] relative shrink-0 w-full" data-name="_Select menu clicked">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[14px] py-[10px] relative w-full">
          <Content5 />
          <Check />
        </div>
      </div>
    </div>
  );
}

function MenuItems() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px px-0 py-[4px] relative" data-name="Menu items">
      <Title1 />
      <SelectMenuItem />
      <SelectMenuItem1 />
      <SelectMenuClicked />
    </div>
  );
}

function OverflowMenu() {
  return (
    <div className="absolute bg-white right-[12px] rounded-[8px] top-[40.5px] w-[240px]" data-name="overflowMenu">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start overflow-clip relative rounded-[inherit] w-full">
        <MenuItems />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_12px_16px_-4px_rgba(10,13,18,0.08),0px_4px_6px_-2px_rgba(10,13,18,0.03)]" />
    </div>
  );
}

export default function ChatWidget() {
  return (
    <div className="bg-gradient-to-b content-stretch flex flex-col from-[rgba(28,57,142,0.95)] items-center relative rounded-[16px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] size-full to-[rgba(22,36,86,0.95)]" data-name="ChatWidget-밤우주">
      <Top />
      <Body />
      <Bottom />
      <OverflowMenu />
    </div>
  );
}