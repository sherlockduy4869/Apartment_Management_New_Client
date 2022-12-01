import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Search, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Inject } from '@syncfusion/ej2-react-grids';

import { sliderData, contextMenuItems, sliderGrid } from '../data/dummy';
import { Header } from '../components';

const Slider = () => {
  const toolbarOptions = ['Search'];
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Slider" />
      <GridComponent
        id="gridcomp"
        dataSource={sliderData}
        allowPaging
        allowSorting
        allowExcelExport
        allowPdfExport
        contextMenuItems={contextMenuItems}
        toolbar={toolbarOptions}
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {sliderGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Search, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport]} />
      </GridComponent>
    </div>
  );
};
export default Slider;
