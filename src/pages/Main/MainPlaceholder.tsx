import React from "react";
import { Flex } from "../../elements/Grid";
import { ReactComponent as NoData } from "../../assets/content.svg";
import Text from "../../elements/Text";

const MainPlaceholder: React.FC = () => {
  return (
    <Flex align="center" justify="center" style={{ height: "100%" }}>
      <Flex
        style={{ width: 300 }}
        direction="column"
        justify="center"
        align="center"
      >
        <div>
          <NoData width="100%" height="300px" />
          <Text.h3 align="center">Keep up, and organize</Text.h3>
        </div>
      </Flex>
    </Flex>
  );
};

export default MainPlaceholder;
