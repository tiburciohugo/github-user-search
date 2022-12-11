import React, { useState, useEffect } from "react";
import searchIcon from "../assets/icon-search.svg";
import { User } from "../../types/types";
import Hero from "./Hero";
import Datetime from "react-datetime";

export default function Searchbar(data: any) {
  const [searchUser, setSearchUser] = React.useState("octocat");
  const [user, setUser] = React.useState<any>(
    "https://api.github.com/users/octocat"
  );
  const [userData, setUserData] = useState([] as User[]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");

  useEffect(() => {
    const fetchDefaultUser = async () => {
      const response = await fetch(`https://api.github.com/users/octocat`);
      const data = await response.json();
      setUser(data);
    };
    fetchDefaultUser();
  }, []);

  const changeHandler = async (e: any) => {
    e.preventDefault();
    setSearchUser(e.target.value);
  };

  const fetchUser = async () => {
    setLoading(true);
    setError(false);

    try {
      const response = await fetch(
        `https://api.github.com/users/${searchUser}`
      );
      const data = await response.json();

      setUserData(data);

      if (data.message) {
        setError(true);
        setErrorMessage(data.message);
      } else {
        setUser(data);
      }
    } catch (error: any) {
      setError(true);
      setErrorMessage(error.message);
    }
    setLoading(false);
  };

  const handleKeyDown = (e: any) => {
    if (e.key === "Enter") {
      fetchUser();
    }
  };

  return (
    <>
      <div
        className="mt-10 flex flex-row justify-evenly items-center h-[3.75rem] bg-white dark:bg-darker-blue rounded-xl shadow-lg px-2 gap-2"
        onKeyDown={handleKeyDown}
      >
        <img
          src={searchIcon}
          alt="search-icon"
          className="c-md:ml-2 c-lg:ml-4"
        />
        {error ? (
          <input
            className="w-full bg-transparent outline-none placeholder:text-transparent dark:text-white"
            type="text"
            placeholder="Search Github username..."
            onChange={changeHandler}
            onKeyDown={(e) => e.key === "Enter" && fetchUser()}
          />
        ) : (
          <input
            className="w-full bg-transparent outline-none placeholder:text-[0.813rem] c-md:ml-2 c-lg:ml-4 c-lg:placeholder:text-lg dark:text-white"
            type="text"
            placeholder="Search Github username..."
            onChange={changeHandler}
            onKeyDown={(e) => e.key === "Enter" && fetchUser()}
          />
        )}

        <button
          onClick={fetchUser}
          tabIndex={0}
          type="button"
          className="flex items-center justify-center w-20 px-4 font-bold text-white rounded-lg bg-medium-blue hover:bg-medium-blue-light h-11"
        >
          Search
        </button>
        {loading ? (
          <div
            className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full absolute left-auto right-auto text-sm top-20 text-gray-600"
            role="status"
          >
            <span className="hidden">Loading...</span>
          </div>
        ) : null}
        {error ? (
          <p className="text-sm font-semibold text-rose-600 absolute left-auto c-md:left-[58%] c-lg:left-[58%] xl:left-[55%] right-[38%] c-md:right-[20%] top-30">
            No results
          </p>
        ) : null}
      </div>
      {error ? null : <Hero data={user} />}
    </>
  );
}
