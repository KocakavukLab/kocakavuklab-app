import { TwitterTimelineEmbed } from "react-twitter-embed";

const News = () => {
  return (
    <div className="">
      <div className="text-center">
        <h1 className="monst-font text-5xl font-medium">Updates</h1>
        <div className="flex items-center justify-center md:pb-2">
          <div className="items-center pt-6" style={{ height: 800 }}>
            <TwitterTimelineEmbed
              onLoad={function noRefCheck() {}}
              align="center"
              screenName="ekocakavuk"
              sourceType="widget"
              slug="breakingnews"
              noScrollbar="True"
              autoHeight
              options={{ width: 400, tweetLimit: "4" }}
              noFooter="True"
              noHeader="True"
              noBorder="True"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
