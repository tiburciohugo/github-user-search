import locationIcon from "../assets/icon-location.svg";
import websiteIcon from "../assets/icon-website.svg";
import companyIcon from "../assets/icon-company.svg";
import twitterIcon from "../assets/icon-twitter.svg";

export default function Hero(data: any) {
  const date = new Date(data.data.created_at).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <div className="px-6 py-6 mt-4 bg-white shadow-lg rounded-xl dark:bg-darker-blue">
        <div className="flex items-center">
          <img
            src={data.data.avatar_url}
            className="w-16 h-16 rounded-full c-lg:w-32 c-lg:h-32"
            alt="github user profile avatar"
          />
          <div className="flex flex-col ml-4 c-lg:w-full c-lg:mb-16 c-lg:ml-8 c-lg:flex-row c-lg:items-center c-lg:justify-between">
            <div>
              <h4 className="font-semibold dark:text-white c-lg:text-3xl">
                {data.data.name}
              </h4>
              <p className="text-sm text-medium-blue c-lg:text-lg">
                @{data.data.login}
              </p>
            </div>
            <p className="text-sm text-medium-gray dark:text-white c-lg:mb-6 c-lg:text-lg">
              {`Joined ${date}`}
            </p>
          </div>
        </div>

        {/* Profile Bio */}
        {data.data.bio == null ? (
          <p className="mt-8 text-sm break-all text-grayish-blue dark:text-white c-lg:-mt-8 c-lg:ml-40">
            This profile has no bio
          </p>
        ) : (
          <p className="mt-8 text-sm break-all text-grayish-blue dark:text-white c-lg:mt-0 c-lg:ml-40">
            {data.data.bio}
          </p>
        )}

        <div className="flex gap-4 p-4 mt-8 text-xs rounded-lg bg-lighter-blue justify-evenly dark:bg-darkest-blue c-lg:ml-40">
          <div className="flex flex-col">
            <p className="text-grayish-blue dark:text-white">Repos</p>
            <p className="self-center text-lg font-bold text-dark-grayish-blue md:self-start dark:text-white">
              {data.data.public_repos}
            </p>
          </div>
          <div className="flex flex-col">
            <p className="text-grayish-blue dark:text-white">Followers</p>
            <p className="self-center text-lg font-bold text-dark-grayish-blue md:self-start dark:text-white">
              {data.data.followers}
            </p>
          </div>
          <div className="flex flex-col">
            <p className="text-grayish-blue dark:text-white">Following</p>
            <p className="self-center text-lg font-bold text-dark-grayish-blue md:self-start dark:text-white">
              {data.data.following}
            </p>
          </div>
        </div>

        <div className="flex flex-col mt-4 text-sm c-md:grid c-md:grid-cols-2 dark:white-text c-lg:ml-40">
          {/* Location field */}
          <div className="flex items-center mt-2">
            {data.data.company ? (
              <>
                <img
                  className="w-5 h-5"
                  src={locationIcon}
                  alt="location-icon"
                />
                <p className="ml-4 text-grayish-blue">{data.data.location}</p>
              </>
            ) : (
              <>
                <img
                  src={locationIcon}
                  alt="location-icon"
                  className="opacity-50 medium-gray"
                />
                <p className="ml-4 opacity-50 text-medium-gray">
                  Not Available
                </p>
              </>
            )}
          </div>

          {/* Blog field */}
          <div className="flex items-center mt-2">
            {data.data.blog ? (
              <>
                <img src={websiteIcon} alt="website-icon" />
                <a
                  href={data.data.blog}
                  className="ml-4 break-all cursor-pointer text-grayish-blue hover:underline"
                  target={"_blank"}
                >
                  {data.data.blog}
                </a>
              </>
            ) : (
              <>
                <img
                  src={websiteIcon}
                  alt="website-icon"
                  className="opacity-50 medium-gray"
                />
                <p className="ml-4 opacity-50 text-medium-gray">
                  Not Available
                </p>
              </>
            )}
          </div>

          {/* Twitter field */}
          <div className="flex items-center mt-2">
            {data.data.twitter_username ? (
              <>
                <img
                  src={twitterIcon}
                  alt="twitter-icon"
                  className="medium-gray"
                />
                <a
                  href={`https://twitter.com/${data.data.twitter_username}`}
                  className="ml-4 cursor-pointer text-grayish-blue hover:underline"
                  target={"_blank"}
                >
                  {data.data.twitter_username}
                </a>
              </>
            ) : (
              <>
                <img
                  src={twitterIcon}
                  alt="twitter-icon"
                  className="opacity-50 medium-gray"
                />
                <p className="ml-4 opacity-50 text-medium-gray">
                  Not Available
                </p>
              </>
            )}
          </div>

          {/* Company field */}
          <div className="flex items-center mt-2">
            {data.data.company ? (
              <>
                <img src={companyIcon} alt="company-icon" />
                <p className="ml-4 cursor-pointer text-grayish-blue hover:underline">
                  {data.data.company}
                </p>
              </>
            ) : (
              <>
                <img
                  src={companyIcon}
                  alt="company-icon"
                  className="opacity-50 medium-gray"
                />
                <p className="ml-4 opacity-50 text-medium-gray">
                  Not Available
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
