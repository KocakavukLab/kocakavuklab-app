import { TwitterTimelineEmbed } from "react-twitter-embed";

const News = () => {
  return (
    <div className="">
      <div className="text-center">
        <h1 className="monst-font text-8xl font-medium">Updates</h1>
        <div className="flex items-center justify-center p-8">
          <div className="items-center pt-6">
            <TwitterTimelineEmbed
              onLoad={function noRefCheck() {}}
              screenName="ekocakavuk"
              sourceType="widget"
              noScrollbar="True"
              tweetLimit={1}
              options={{ height: 600, width: 600 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
