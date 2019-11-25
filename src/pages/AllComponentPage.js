/* eslint-disable react/prop-types */
import React from "react";
import {
  Card,
  Banner,
  MessagingCard,
  GlobalNavigation,
  Page,
  Row,
  Column,
  Sticky
} from "../uds";
import { Text } from "../uds/primitive";

const AllComponentPage = () => {
  return (
    <Page>
      <Sticky top topgap="60px">
        <GlobalNavigation />
      </Sticky>
      <Row>
        <Column>
          <Banner />
          <Banner heading />
          <Banner heading icon />
          <MessagingCard icon /> 
          <MessagingCard heading link />
          <MessagingCard heading link icon />
        </Column>
      </Row>
      <Row>
        <Column>
          <Card>
            <Text type900 bold color="neutral__900" mb="3">
              Display 900
            </Text>
            <Text type800 bold color="neutral__900" mb="3">
              Display 800
            </Text>
            <Text type700 bold color="neutral__900" mb="3">
              Display 700
            </Text>
            <Text type600 bold color="neutral__900" mb="3">
              Heading 600
            </Text>
            <Text type500 bold color="neutral__900" mb="3">
              Heading 500
            </Text>
            <Text type400 bold color="neutral__900" mb="3">
              Heading 400
            </Text>
            <Text type300 bold color="neutral__900" mb="3">
              Heading 300
            </Text>
            <Text type300 color="neutral__700" mb="3">
              Subheading
            </Text>
          </Card>
        </Column>
      </Row>
    </Page>
  );
};

export default AllComponentPage;
