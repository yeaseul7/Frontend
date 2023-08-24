import React, { useState, useEffect } from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { HiOutlineUserCircle } from "react-icons/hi";
import { CiStar } from "react-icons/ci";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { NavStyle, LeftNav, NavList, LoginState } from "@/style/NavStyle";
import axios from "axios";

/** @jsxImportSource @emotion/react */

const NavItem = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  list-style: none;
  padding-left: 0px;
`;

const Navber = (props) => {
  const [name, setName] = React.useState("");
  const [role, setRole] = React.useState("");
  const router = useRouter();
  const [Token, setToken] = useState("");
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const authToken = localStorage.getItem("authToken");
    const username = localStorage.getItem("username");
    const role = localStorage.getItem("role");

    setName(username);
    setRole(role);
    setToken(authToken);
    startList(authToken);
    if (!authToken) {
      router.push("/login");
    }
  }, []);
  const startSelect = () => {
    axios
      .post("http://domidomi.duckdns.org/categories/1/favorites", {
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      })
      .then((response) => {
        return alert("즐찾추가 우효 www");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const startList = (authToken) => {
    axios
      .get("http://domidomi.duckdns.org/favorites", {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      })
      .then((response) => {
        setData(response.data?.data?.favorites);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onLogout = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // 로컬 스토리지에서 토큰 삭제
    localStorage.removeItem("authToken");
    // 로그아웃 후 로그인 페이지로 이동
    router.push("/login");
  };

  return (
    <NavStyle>
      <Link className="Link" href="/">
        <h1>Dominest</h1>
      </Link>

      <LeftNav>
        <NavList>
          <li>
            <p>즐겨찾기</p>
            <ul css={NavItem}>
              {data.map((favorites) => (
                <li key={favorites.id}>
                  <Link href={favorites.categoryLink} className="Link">
                    <span>{favorites.categoryName}</span>
                    <CiStar size={20} />
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <p>관리자 목록</p>

            <ul css={NavItem}>
              <li>
                <Link href="/studentupload" className="Link">
                  <span>학생정보 업로드</span>
                  <CiStar size={20} />
                </Link>
              </li>
              <li>
                <Link href="/student" className="Link">
                  <span>학생정보 업로드</span>
                  <CiStar size={20} />
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <p>근로생 목록</p>

            <ul css={NavItem}>
              <li>
                <Link href="/admissionform" className="Link">
                  <span>입관신청서</span>
                  <CiStar size={20} />
                </Link>
              </li>
              <li>
                <Link href="/departureform" className="Link">
                  <span>퇴관신청서</span>
                  <CiStar size={20} />
                </Link>
              </li>
              <li>
                <Link href="/imguplodfform" className="Link">
                  <span>이미지 업로드</span>
                  <CiStar size={20} />
                </Link>
              </li>
              <li>
                <Link href="/imgboard" className="Link">
                  <span>이미지 게시판</span>
                </Link>
                <CiStar size={20} onClick={() => startSelect()} />
              </li>
            </ul>

            {/* 다른 근로생 목록 아이템들 추가 */}
          </li>
        </NavList>
      </LeftNav>
      <strong>{props.page}</strong>
      <LoginState>
        <HiOutlineUserCircle className="loginIcon" size={25} />
        <span
          css={css`
            color: green;
            font-weight: bold;
            font-size: 18px;
            margin-right: 5px;
            margin-left: 5px;
          `}
        >
          {name}
        </span>
        {role === "Admin" ? (
          <span
            css={css`
              font-weight: bold;
              font-size: 13px;
              margin-right: 5px;
              margin-left: 5px;
            `}
          >
            근로생
          </span>
        ) : (
          <span
            css={css`
              font-weight: bold;
              font-size: 13px;
              margin-right: 5px;
              margin-left: 5px;
            `}
          >
            관리자
          </span>
        )}

        <button className="logout" onClick={onLogout}>
          로그아웃
        </button>
      </LoginState>
    </NavStyle>
  );
};

export default Navber;
