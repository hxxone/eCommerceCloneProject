import "./productList.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { productRows } from '../../../data';
import { Link } from "react-router-dom";
import { useState } from "react";
import styled from 'styled-components';

const Container = styled.div`
	flex: 4;
`;
const ProductListItem = styled.div`
	display: flex;
	align-items: center;
`;

const Image = styled.img`
	width: 32px;
	height: 32px;
	border-radius: 50%;
	object-fit: cover;
	margin-right: 10px;
`;

const Edit = styled.button`
    border : none;
    border-radius: 10px;
    padding: 5px 10px;
    background-color: #3bb077;
    color: white;
    cursor: pointer;
    margin-right: 20px;
`

export default function ProductList() {
	const [data, setData] = useState(productRows);

	const handleDelete = (id) => {
		setData(data.filter((item) => item.id !== id));
	};
	const columns = [
		{ field: "id", headerName: "ID", width: 90 },
		{
			field: "product",
			headerName: "Product",
			width: 200,
			renderCell: (params) => {
				return (
					<ProductListItem>
						<Image src={params.row.img} alt="" />
						{params.row.name}
					</ProductListItem>
				);
			},
		},
		{ field: "stock", headerName: "Stock", width: 200 },
		{
			field: "status",
			headerName: "Status",
			width: 120,
		},
		{
			field: "price",
			headerName: "Price",
			width: 160,
		},
		{
			field: "action",
			headerName: "Action",
			width: 150,
			renderCell: (params) => {
				return (
					<>
						<Link to={"/product/" + params.row.id} >
							<Edit> Edit </Edit>
						</Link>
						<DeleteOutline
							onClick={() => handleDelete(params.row.id)}
							style={{ color: "red", cursor: "pointer" }}
						/>
					</>
				);
			},
		},
	];
	return (
		<Container>
			<DataGrid
				rows={data}
				disableSelectionOnClick
				columns={columns}
				pageSize={8}
				checkboxSelection
			/>
		</Container>
	);
}
