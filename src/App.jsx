import './App.css'

/* ── SVG Icons ── */
/* Badge icon: link/share arrows (matches Figma vector spec) */
const IconBadge = () => (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
    {/* outer rect */}
    <rect x="1.33" y="1.33" width="13.34" height="13.34" rx="1.5" stroke="#7C5CFF" strokeWidth="1.33"/>
    {/* top-right corner arrow markers */}
    <line x1="13.33" y1="1.33" x2="13.33" y2="4" stroke="#7C5CFF" strokeWidth="1.33" strokeLinecap="round"/>
    <line x1="12" y1="1.33" x2="14.67" y2="1.33" stroke="#7C5CFF" strokeWidth="1.33" strokeLinecap="round"/>
    {/* bottom-left corner arrow markers */}
    <line x1="1.33" y1="12" x2="1.33" y2="14.67" stroke="#7C5CFF" strokeWidth="1.33" strokeLinecap="round"/>
    <line x1="1.33" y1="14.67" x2="4" y2="14.67" stroke="#7C5CFF" strokeWidth="1.33" strokeLinecap="round"/>
  </svg>
)

const IconGrid = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
    <rect x="3" y="3" width="8" height="8" rx="1.5" stroke="#7C5CFF" strokeWidth="2"/>
    <rect x="13" y="3" width="8" height="8" rx="1.5" stroke="#7C5CFF" strokeWidth="2"/>
    <rect x="3" y="13" width="8" height="8" rx="1.5" stroke="#7C5CFF" strokeWidth="2"/>
    <rect x="13" y="13" width="8" height="8" rx="1.5" stroke="#7C5CFF" strokeWidth="2"/>
  </svg>
)

const IconTarget = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
    <circle cx="12" cy="12" r="9" stroke="#D17DFC" strokeWidth="2"/>
    <circle cx="12" cy="12" r="6" stroke="#D17DFC" strokeWidth="2"/>
    <circle cx="12" cy="12" r="3" stroke="#D17DFC" strokeWidth="2"/>
  </svg>
)

const IconUsers = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
    <path d="M2 20c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke="#00BC7D" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="8" cy="8" r="4" stroke="#00BC7D" strokeWidth="2"/>
    <path d="M18 14c2.209 0 4 1.791 4 4" stroke="#00BC7D" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="18" cy="8" r="3" stroke="#00BC7D" strokeWidth="2"/>
  </svg>
)

/* Active home icon — matches Figma: chimney + house outline, purple, 24.2px */
const IconHome = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
    {/* chimney */}
    <line x1="14" y1="3" x2="14" y2="6" stroke="#7C5CFF" strokeWidth="2.5" strokeLinecap="round"/>
    {/* house outline */}
    <path d="M3 10.5L12 3l9 7.5V21a1 1 0 01-1 1H4a1 1 0 01-1-1V10.5z" stroke="#7C5CFF" strokeWidth="2.5" strokeLinejoin="round"/>
    {/* door */}
    <path d="M9 22V15h6v7" stroke="#7C5CFF" strokeWidth="2.5" strokeLinejoin="round"/>
  </svg>
)

const IconWorld = () => (
  <svg viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" width="22" height="22">
    <rect x="1.83" y="1.83" width="18.33" height="18.33" rx="2" stroke="#90A1B9" strokeWidth="1.83"/>
    <rect x="7.33" y="1.83" width="7.33" height="18.33" stroke="#90A1B9" strokeWidth="1.83"/>
    <line x1="1.83" y1="11" x2="20.17" y2="11" stroke="#90A1B9" strokeWidth="1.83"/>
  </svg>
)

const IconAgent = () => (
  <svg viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" width="22" height="22">
    <rect x="1.83" y="1.83" width="18.33" height="18.33" rx="2" stroke="#90A1B9" strokeWidth="1.83"/>
    <circle cx="11" cy="8.25" r="2.75" stroke="#90A1B9" strokeWidth="1.83"/>
    <path d="M4.58 18.33c0-3.547 2.867-6.417 6.42-6.417s6.42 2.87 6.42 6.417" stroke="#90A1B9" strokeWidth="1.83" strokeLinecap="round"/>
  </svg>
)

const IconRun = () => (
  <svg viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" width="22" height="22">
    <rect x="1.83" y="1.83" width="18.33" height="18.33" rx="2" stroke="#90A1B9" strokeWidth="1.83"/>
    <polygon points="8.25,6.42 15.58,11 8.25,15.58" stroke="#90A1B9" strokeWidth="1.83" strokeLinejoin="round"/>
  </svg>
)

const IconMsg = () => (
  <svg viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" width="22" height="22">
    <path d="M1.83 2.75h18.33a.92.92 0 01.92.92v12.83a.92.92 0 01-.92.92H5.5L1.83 20.17V3.67a.92.92 0 01.92-.92z" stroke="#90A1B9" strokeWidth="1.83" strokeLinejoin="round"/>
  </svg>
)

const IconChevron = () => (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
    <path d="M6 4l4 4-4 4" stroke="#7C5CFF" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const TASKS = [
  {
    company: 'NoteFlow AI',
    type: 'AI 内容增长实习生',
    title: '为一款 AI 笔记 App 设计 7 天小红书内容增长方案',
    match: '96%',
  },
  {
    company: 'Mellow Tea',
    type: 'AI 市场研究助理',
    title: '分析 3 个新式茶饮品牌，找到一个新品机会',
    match: '91%',
  },
  {
    company: 'LeadPilot CRM',
    type: 'AI 销售线索研究员',
    title: '为一款 CRM 产品找到 20 个潜在客户，并设计触达话术',
    match: '88%',
  },
]

export default function App() {
  return (
    <div className="phone">
      {/* Background blobs */}
      <div className="blob-purple" />
      <div className="blob-pink" />

      {/* Status Bar */}
      <div className="status-bar">
        <span className="status-time">9:41</span>
        <div className="status-right">
          <div className="signal-bars">
            <div className="signal-bar" style={{height:4}} />
            <div className="signal-bar" style={{height:6}} />
            <div className="signal-bar" style={{height:8}} />
            <div className="signal-bar" style={{height:11}} />
          </div>
          <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
            <path d="M8 2.5C10.3 2.5 12.4 3.4 14 4.9L15.5 3.4C13.5 1.6 10.9.5 8 .5S2.5 1.6.5 3.4L2 4.9C3.6 3.4 5.7 2.5 8 2.5z" fill="rgba(0,0,0,0.9)"/>
            <path d="M8 5.5c1.5 0 2.9.6 3.9 1.5L13.4 5.5C12 4.3 10.1 3.5 8 3.5S4 4.3 2.6 5.5L4.1 7C5.1 6.1 6.5 5.5 8 5.5z" fill="rgba(0,0,0,0.9)"/>
            <circle cx="8" cy="10" r="1.5" fill="rgba(0,0,0,0.9)"/>
          </svg>
          <svg width="25" height="12" viewBox="0 0 25 12" fill="none">
            <rect x="0.5" y="0.5" width="21" height="11" rx="2.5" stroke="rgba(0,0,0,0.35)" strokeWidth="1"/>
            <rect x="1.5" y="1.5" width="14" height="9" rx="1.5" fill="rgba(0,0,0,0.9)"/>
            <path d="M23 4v4a2 2 0 000-4z" fill="rgba(0,0,0,0.4)"/>
          </svg>
        </div>
      </div>

      {/* WeChat-style NavBar */}
      <div className="wechat-navbar">
        <div className="capsule">
          <div className="capsule-dots">
            <div className="dot" /><div className="dot" /><div className="dot" />
          </div>
          <div className="capsule-sep" />
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <circle cx="8" cy="8" r="7" stroke="rgba(0,0,0,0.8)" strokeWidth="1.2"/>
            <circle cx="8" cy="8" r="4.5" stroke="rgba(0,0,0,0.8)" strokeWidth="1.2"/>
          </svg>
        </div>
      </div>

      {/* Scrollable main content */}
      <div className="scroll-body">

        {/* Hero Section */}
        <div className="hero">
          <div className="badge">
            <IconBadge />
            <span className="badge-text">Yuzhi Agent Work</span>
          </div>
          <h1 className="hero-title">不是投简历，<br/>让你的分身先去工作</h1>
          <p className="hero-sub">
            上传简历或说一段自我介绍，生成你的能力 Agent，让它进入真实岗位任务中试跑、产出和证明你。
          </p>
        </div>

        {/* Agent Card */}
        <div className="glass agent-card">
          <div className="card-blur" />

          <div className="agent-top">
            <div className="agent-meta">
              <span className="agent-label">我的分身状态</span>
              <div className="agent-name-row">
                <span className="agent-name">Xiao AI</span>
                <span className="status-pill">可派出</span>
              </div>
            </div>
            <div className="avatar-wrap">
              <div className="avatar-ball">
                <div className="avatar-eyes">
                  <div className="eye" />
                  <div className="eye" />
                </div>
              </div>
            </div>
          </div>

          <div className="stats-row">
            <div className="stat">
              <span className="stat-val">18</span>
              <span className="stat-lbl">Skills</span>
            </div>
            <div className="stat">
              <span className="stat-val">3</span>
              <span className="stat-lbl">已完成任务</span>
            </div>
            <div className="stat">
              <span className="stat-val">2</span>
              <span className="stat-lbl">已生成报告</span>
            </div>
          </div>

          <button className="cta-btn">创建 / 更新我的分身</button>
        </div>

        {/* Stats Grid */}
        <div className="stats-grid">
          <div className="glass stat-card">
            <div className="stat-icon"><IconGrid /></div>
            <span className="stat-big-val">100+</span>
            <span className="stat-small-lbl">合作企业覆盖 10 个行业</span>
          </div>
          <div className="glass stat-card">
            <div className="stat-icon"><IconTarget /></div>
            <span className="stat-big-val">1000+</span>
            <span className="stat-small-lbl">真实岗位任务 已预置</span>
          </div>
          <div className="glass stat-card stat-card-wide">
            <div className="active-left">
              <IconUsers />
              <span className="active-lbl">活跃分身总数</span>
            </div>
            <span className="active-val">102,483</span>
          </div>
        </div>

        {/* Today's Tasks */}
        <div className="tasks-section">
          <div className="section-hd">
            <span className="section-title">今日推荐任务</span>
            <div className="section-link">
              <span>进入任务世界</span>
              <IconChevron />
            </div>
          </div>
          <div className="task-cards">
            {TASKS.map((t, i) => (
              <div key={i} className="glass task-card">
                <div className="task-info">
                  <div className="task-meta">
                    <span className="task-company">{t.company}</span>
                    <span className="task-type">{t.type}</span>
                  </div>
                  <p className="task-title">{t.title}</p>
                </div>
                <div className="task-match">
                  <span className="match-val">{t.match}</span>
                  <span className="match-lbl">匹配度</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom Navigation */}
      <div className="bottom-nav-area">
        <div className="bottom-nav">
          <div className="nav-item">
            <IconHome />
            <span className="nav-lbl nav-lbl-active">首页</span>
          </div>
          <div className="nav-item">
            <IconWorld />
            <span className="nav-lbl nav-lbl-inactive">任务世界</span>
          </div>
          <div className="nav-item">
            <IconAgent />
            <span className="nav-lbl nav-lbl-inactive">我的分身</span>
          </div>
          <div className="nav-item">
            <IconRun />
            <span className="nav-lbl nav-lbl-inactive">运行中</span>
          </div>
          <div className="nav-item">
            <IconMsg />
            <span className="nav-lbl nav-lbl-inactive">消息</span>
          </div>
        </div>
        <div className="home-bar" />
      </div>
    </div>
  )
}
