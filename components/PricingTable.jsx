import React from 'react';
import {PricingTable, PricingSlot, PricingDetail} from 'react-pricing-table';

function Pricing() {
  return (
    <PricingTable  highlightColor='#1976D2'>
          <PricingSlot title='Junior' priceText='$15'>
              <PricingDetail> <b>15</b> projects</PricingDetail>
              <PricingDetail> <b>5 GB</b> storage</PricingDetail>
              <PricingDetail> <b>5</b> users</PricingDetail>
              <PricingDetail strikethrough> <b>Time tracking</b></PricingDetail>
          </PricingSlot>
          <PricingSlot title='BASIC' priceText='$20'>
              <PricingDetail> <b>35</b> projects</PricingDetail>
              <PricingDetail> <b>15 GB</b> storage</PricingDetail>
              <PricingDetail> <b>Unlimited</b> users</PricingDetail>
              <PricingDetail> <b>Time tracking</b></PricingDetail>
          </PricingSlot>
          <PricingSlot  title='All Out' priceText='$30'>
              <PricingDetail> <b>100</b> projects</PricingDetail>
              <PricingDetail> <b>30 GB</b> storage</PricingDetail>
              <PricingDetail> <b>Unlimited</b> users</PricingDetail>
              <PricingDetail> <b>Time tracking</b></PricingDetail>
          </PricingSlot>
          <PricingSlot  title='Professional' priceText='$50'>
              <PricingDetail> <b>Unlimited</b> projects</PricingDetail>
              <PricingDetail> <b>75 GB</b> storage</PricingDetail>
              <PricingDetail> <b>Unlimited</b> users</PricingDetail>
              <PricingDetail> <b>Time tracking</b></PricingDetail>
          </PricingSlot>
    </PricingTable>
  )
}

export default Pricing