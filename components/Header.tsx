import Image from 'next/image'
import Link from 'next/link'

function Header() {
  return (
    <header>
      <div className="flex justify-between items-center w-full h-10 bg-grape-normal">
        <div className="flex h-full items-center pl-5">
          <Image src={'/icons/logo.svg'} alt="로고" width={100} height={100} />
          <h1 className="text-indent-hide">로고</h1>
        </div>
        <nav className="pr-5 text-xs text-white">
          <Link href={'#'} className="mr-2.5">
            회원가입
          </Link>
          <Link href={'#'}>로그인</Link>
        </nav>
      </div>
      <nav className="w-full h-8 bg-grape-light">
        <ul className="flex justify-center items-center gap-4 h-full text-sm font-medium text-black">
          <li>
            <Link href={'#'}>포도키우기</Link>
          </li>
          <li>
            <Link href={'#'}>복습문제</Link>
          </li>
          <li>
            <Link href={'#'}>풀이공유</Link>
          </li>
          <li>
            <Link href={'#'}>스터디</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
