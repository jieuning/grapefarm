import Image from 'next/image'
import Link from 'next/link'

function FarmInfo() {
  return (
    <>
      <div className="flex flex-col justify-between w-[40%] h-[164px] mt-14 p-4 rounded-xl bg-grape-light">
        <div className="flex gap-2.5 justify-between">
          <div className="flex gap-2.5">
            <Image
              src={'/images/user_profile.svg'}
              alt="유저프로필"
              width={50}
              height={50}
            />
            <div className="leading-tight text-sm">
              <p className="text-base font-bold">
                LV.<span className="text-point">1</span>
              </p>
              <p className="font-bold">포도농장주</p>
              <Link href={'#'} className="underline text-gray-400">
                마이페이지
              </Link>
            </div>
          </div>
          <ul className="flex text-center gap-[21px] text-sm font-semibold tracking-tighter">
            <li className="li-divider">
              <p className="mb-1.5">포도송이</p>
              <p className="text-lg">0</p>
            </li>
            <li className="li-divider">
              <p className="mb-1.5">총푼문제수</p>
              <p className="text-lg">20</p>
            </li>
            <li className="li-divider">
              <p className="mb-1.5">즐겨찾기</p>
              <p className="text-lg">10</p>
            </li>
            <li className="">
              <p className="mb-1.5">공유문제</p>
              <p className="text-lg">6</p>
            </li>
          </ul>
        </div>
        <div className="w-full bg-white rounded-full h-2.5">
          <div className="bg-point w-9 h-full rounded-full"></div>
        </div>
      </div>
    </>
  )
}

export default FarmInfo
