

interface SearchAreaProps {
  searchOpen: boolean,
  setSearchOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function SearchArea({ searchOpen, setSearchOpen }: SearchAreaProps) {
  return (
    <div className="search-wrap" style={{ display: searchOpen ? 'block' : 'none' }}>
      <div className="search-inner">
        <i className="fas fa-times search-close" id="search-close" onClick={() => setSearchOpen(false)}></i>
        <div className="search-cell">
          <form method="get">
            <div className="search-field-holder">
              <input type="search" className="main-search-input" placeholder="Search..." />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
